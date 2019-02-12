class AddVersionNumberToCities < ActiveRecord::Migration[5.2]
  def change
    add_column :cities, :version_number, :integer
  end
end
