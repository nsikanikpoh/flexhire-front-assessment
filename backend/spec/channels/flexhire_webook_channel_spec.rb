require "rails_helper"

RSpec.describe FlexhireWebhookChannel, type: :channel do

  it "subscribes to a stream " do
    subscribe()

    expect(subscription).to be_confirmed
    expect(subscription).to have_stream_from("flexhire_webhook:flexhire_webhook_channel") 
  end
end