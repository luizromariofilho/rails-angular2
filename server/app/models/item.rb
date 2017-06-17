class Item < ApplicationRecord
  belongs_to :item_type
  validates_presence_of :name, :barcode
end
