class User < ActiveRecord::Base
	has_secure_password

  validates_presence_of :name

	has_many :reviews
	has_many :products, :through => :reviews
	has_many :categories
	has_many :products, :through => :categories
end
