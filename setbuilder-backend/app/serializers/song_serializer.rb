class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :notes

  belongs_to :user
  belongs_to :setlist
end
