# == Schema Information
#
# Table name: freelance_documents
#
#  id          :integer          not null, primary key
#  title       :string
#  description :string
#  file_url    :text
#  image_url   :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#


5.times do |document|
  FreelanceDocument.create!(title: "Document #{document}", description: "Consequat ullamco veniam anim adipisicing pariatur labore officia occaecat.", file_url: "https://www.google.com", image_url: "https://www.colton-mathews.com")
end

puts "Created 5 documents."