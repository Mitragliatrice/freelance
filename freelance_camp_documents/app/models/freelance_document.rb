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

class FreelanceDocument < ApplicationRecord
end
