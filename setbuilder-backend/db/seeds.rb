# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Setlist.create(title: 'Purple Rain Tour 1985')
User.create(name: 'Prince', email: 'purpleone@gmail.com')
Song.create(name: 'Uptown', notes: 'Key: A minor; Arrangement: Intro Verse1 Prechorus Chorus; Drums will start with hits. On 4th hit begin song.', setlist_id: 1 , user_id: 1)
Song.create(name: 'Why You Wanna Treat Me So Bad', notes: 'Key: Gb; Arrangement: Intro Verse1 Prechorus Chorus Solo; Extended guitar solo until cued ending.', setlist_id: 1 , user_id: 1)
Song.create(name: 'I Wanna Be Your Lover', notes: 'Key: B; Arrangement: Intro Verse1 Prechorus Chorus (2x) Extended Jam until cue;', setlist_id: 1, user_id: 1)
Song.create(name: 'Dirty Mind', notes:'Key: C; Arrangement: Intro Verse1 Verse2; Bridge Outro; Extend Groove, audience call and response', setlist_id: 1, user_id: 1)
Song.create(name: 'Controversy', notes:'Key: Db minor; Arrangement: Intro Verse1 Chorus; Verse2 Chorus Prayer Bridge; Bass Solo Chorus', setlist_id: 1 , user_id: 1)
Song.create(name: 'Purple Rain', notes:'Key: Bb; Arrangement: Extended Intro Verse1 Chorus Verse2 Chorus Extended Guitar Solo Outro', setlist_id: 1 , user_id: 1)
Song.create(name: 'Let\'s Work', notes:'Key: B minor; Arrangement: Intro Verse1 Chorus Verse2 Chorus; Bridge Chorus; Work It Chant', setlist_id: 1 , user_id: 1)
Song.create(name: 'Let\'s Go Crazy', notes:'Key: Gb; Arrangement: Intro Verse1 Chorus Verse2 Chorus Guitar Solo Chorus Outro', setlist_id: 1 , user_id: 1)
Song.create(name: '1999', notes:'Key: F; Arrangement: Intro Verse1 Chorus Verse2 Chorus Partay Outro ', setlist_id: 1 , user_id: 1)
Song.create(name: 'Little Red Corvette', notes:'Key: D; Arrangement: Extended Intro Verse1 Chorus Verse2 Chorus GuitarSolo-Dance Break Short Chorus', setlist_id: 1 , user_id: 1)
Song.create(name: 'When Doves Cry', notes:'Key: A minor; Arrangement: Verse1 Chorus(2x) Synth Solo Guitar Solo', setlist_id: 1 , user_id: 1)
