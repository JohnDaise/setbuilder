class User < ApplicationRecord
has_many :songs
has_many :setlists, through: :songs

end
