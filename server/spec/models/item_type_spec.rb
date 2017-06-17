require 'rails_helper'

RSpec.describe ItemType, type: :model do
  subject {described_class.new}
  
  describe "Attributes" do
    it "is valid with valid attributes" do
      subject.description = "Lençol"
      expect(subject).to be_valid
    end

    it "is not valid without a description" do
      expect(subject).to_not be_valid
    end
  end  
end
