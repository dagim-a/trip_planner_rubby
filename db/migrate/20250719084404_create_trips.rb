class CreateTrips < ActiveRecord::Migration[8.0]
  def change
    create_table :trips do |t|
      t.string :img
      t.string :trip_name
      t.string :destination
      t.date :start_date
      t.date :end_date
      t.text :trip_description
      t.string :email
      t.string :transportation_type
      t.integer :number_of_travelers
      t.decimal :trip_cost
      t.string :status
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
