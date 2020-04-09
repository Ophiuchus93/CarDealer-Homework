class Car < ApplicationRecord
  has_many :features, dependent: :destroy
end
