class User < ApplicationRecord
  has_many :trips
  has_one :user_info
  has_many :notifications
  has_many :bookings

end
