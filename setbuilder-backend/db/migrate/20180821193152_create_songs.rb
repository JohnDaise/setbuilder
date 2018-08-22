class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :notes
      t.integer :setlist_id
      t.integer :user_id

      t.timestamps
    end
  end
end
