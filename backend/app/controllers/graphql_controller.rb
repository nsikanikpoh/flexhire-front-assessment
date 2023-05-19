class GraphqlController < ApplicationController
  # If accessing from outside this domain, nullify the session
  # This allows for outside API access while preventing CSRF attacks,
  # but you'll have to authenticate your user separately
  # protect_from_forgery with: :null_session
  
  def flexhire_callback
    FlexhireWebhookChannel.broadcast_to('flexhire_webhook_channel', webhook_params)
    render json: {message: 'update event simulated.'}, status: :ok
  end

  def execute
    variables = prepare_variables(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]
    context = {
      # Query context goes here, for example:
      # current_user: current_user,
    }
    result = BackendSchema.execute(query, variables: variables, context: context, operation_name: operation_name)
    render json: result
  rescue StandardError => e
    raise e unless Rails.env.development?
    handle_error_in_development(e)
  end

  def flexhire_api_proxy
    render json:  { message: "FLEXHIRE-API-KEY header must be present"}, 
                    status: :unauthorized and return if request.headers['FLEXHIRE-API-KEY'].nil?
    variables = prepare_variables(params[:variables])
    response = FlexhireGraphqlPostService.new(api_key: request.headers['FLEXHIRE-API-KEY'], 
                    query: params[:query], variables: variables).execute
    render json: response
  rescue => e
    raise e unless Rails.env.development?
    handle_error_in_development(e)
  end


  private


  def webhook_params
    params.permit(:event_name, :timestamp, {:records=>[]})
  end
  
  # Handle variables in form data, JSON body, or a blank value
  def prepare_variables(variables_param)
    case variables_param
    when String
      if variables_param.present?
        JSON.parse(variables_param) || {}
      else
        {}
      end
    when Hash
      variables_param
    when ActionController::Parameters
      variables_param.to_unsafe_hash # GraphQL-Ruby will validate name and type of incoming variables.
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{variables_param}"
    end
  end

  def handle_error_in_development(e)
    logger.error e.message
    logger.error e.backtrace.join("\n")
    render json: { errors: [{ message: e.message, backtrace: e.backtrace }], data: {} }, status: 500
  end
end
