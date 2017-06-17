class CreateItemTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :item_types do |t|
      t.string :description

      t.timestamps
    end
  end
end
