class FlexhireWebhookChannel < ApplicationCable::Channel
  def subscribed
    @webhook_simulated_event_channel = "flexhire_webhook_channel"
    stream_for "flexhire_webhook_channel"
  end

  def receive(data)
      FlexhireWebhookChannel.broadcast_to("flexhire_webhook_channel", data)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
