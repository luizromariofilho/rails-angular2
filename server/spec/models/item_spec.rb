require 'rails_helper'

RSpec.describe Item, type: :model do
  item_type = ItemType.new(description: "Lençol")
  subject {described_class.new(name: "Lençol 01", item_type: item_type, barcode: "00001")}

  describe "Attributes" do 
    it "is not valid without a item type" do
      subject.item_type = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without a name" do
      subject.name = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without a barcode" do
      subject.barcode = nil
      expect(subject).to_not be_valid
    end

    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "create with valid attributes" do
      item = Item.create!({name: "Lençol 01", item_type: item_type, barcode: "00001"})
      expect(item.name).to eq(subject.name)
      expect(item.item_type.id).to eq(subject.item_type.id)
      expect(item.barcode).to eq(subject.barcode)
    end
  end

  describe "Associations" do
    it "belongs to item type" do
      assc = described_class.reflect_on_association(:item_type)
      expect(assc.macro).to eq :belongs_to
    end
  end
  
end
