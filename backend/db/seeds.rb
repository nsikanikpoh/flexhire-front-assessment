# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

webhook_data = WebhookData.create(clientMutationId: "b1ce42c845b5558a0a256fgfg", webhook_id: "d2ViaG9va3MtOQ==",
                        url: "http://localhost:3000/flexhire-callback" )