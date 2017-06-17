class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.references :item_type, foreign_key: true
      t.string :name
      t.string :barcode

      t.timestamps
    end
  end
end
