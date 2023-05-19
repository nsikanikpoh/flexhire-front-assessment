# spec/graphql/types/query_type_spec.rb
require "rails_helper"

RSpec.describe GraphqlController, type: :request do
  describe "POST /flexhire-api" do

    it 'returns status code 401 without an FLEXHIRE-API-KEY header in the request' do
      post '/flexhire-api', params: { query: read_query } 
      expect(response).to have_http_status(401)
    end

      it 'returns status code 200 with FLEXHIRE-API-KEY header in the request' do
        post '/flexhire-api', params: { query: read_query }, headers: {'FLEXHIRE-API-KEY': 'hcua876maiotrmdq'}
        expect(response).to have_http_status(200)
      end
  
      it "returns expected data" do
        post '/flexhire-api', params: { query: read_query }, headers: {'FLEXHIRE-API-KEY': 'hcua876maiotrmdq'} 
        json = JSON.parse(response.body)
        expect(json.dig('data', 'currentUser', 'id')).to eql 'dXNlcnMtNDA2Mw=='
        expect(json.dig('data', 'currentUser', 'name')).to eql 'Nsikan Ikpoh'
        expect(json.dig('data', 'currentUser', 'email')).to eql 'nsikanikpoh@gmail.com'
      end

    def read_query
        <<~GQL
          query {
            currentUser{
              id
              name
              email
            }
          }
        GQL
   end
  end

  describe "POST /flexhire-callback" do
    it 'webhook endpoint is alive' do
      post '/flexhire-callback', params: { timestamp: Time.now.to_i, 
            records: ['dXNlcnMtNDA2Mw==', 'c2tpbGxzLTE2MA=='], event_name:'update'  }
      expect(response).to have_http_status(200)
    end
  end


end


  