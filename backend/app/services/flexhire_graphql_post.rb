require 'net/http'
require 'json'
class FlexhireGraphqlPost

    ALL_NET_HTTP_ERRORS = [
            Timeout::Error, Errno::EINVAL, Errno::ECONNRESET, EOFError,
            Net::HTTPBadResponse, Net::HTTPHeaderSyntaxError, Net::ProtocolError
    ]
    URL = "https://api.flexhire.com/api/v2";

    attr_reader :api_key, :query

    def initialize(api_key:, query:)
        @api_key = api_key
        @query = query
    end

    def execute
        request = Net::HTTP::Post.new(url)
        finalize_request(request)
    end

    private 

    def url
        URI(URL)
    end

    def http
        http_obj = Net::HTTP.new(url.host, url.port)
        http_obj.use_ssl = true
        http_obj.verify_mode = OpenSSL::SSL::VERIFY_NONE
        http_obj
    end

    def finalize_request(request_object)        
        request_object["FLEXHIRE-API-KEY"] = api_key
        request_object["Content-Type"] = 'application/json'
        request_object["Accept"] = 'application/json'
        request_params = {'query': query, 'variables': {}  }
        request_object.body = request_params.to_json
        response = http.request(request_object)
        JSON.parse(response.body)
    rescue *ALL_NET_HTTP_ERRORS => exception
        raise exception
    end
end