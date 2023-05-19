

  RSpec.describe FlexhireGraphqlPostService do
    
    describe "#initialize" do
        it "initialises" do          
            flex_fire_post = described_class.new(api_key: "", query: "", variables: "variables")
            expect(flex_fire_post).to be_instance_of(FlexhireGraphqlPostService)
        end
    end

    describe "#execute" do
        it "it responds to execute method" do          
            flex_fire_post = described_class.new(api_key: "", query: "", variables: "variables")
            expect(flex_fire_post).to respond_to(:execute)
        end
    end

    describe "it sends request and returns appropriate payload" do
        describe '#execute post' do
          it 'sends a post request to the flexhire API' do
            response = Net::HTTPSuccess.new(2.0, '200', 'OK')
            
            expect_any_instance_of(Net::HTTP)
              .to receive(:request)
              .and_return(response)
              allow(response).to receive(:body).and_return({id:"", name:"", email:""}.to_json)
              described_class.new(api_key: "", query: read_query, variables: "").execute
      
            expect(response.code).to eq("200")
          end
        end
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