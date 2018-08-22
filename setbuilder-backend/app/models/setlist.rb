class Setlist < ApplicationRecord
has_many :songs
has_one :user, through: :songs

end
