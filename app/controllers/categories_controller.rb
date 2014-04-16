class CategoriesController < ApplicationController
	before_filter :load_product
  def show
  	@category = Category.find(params[:id])
  end

  def create
  	@category = @product.categories.build(category_params)
  	@category.user_id = current_user.id

  	if @category.save
  		redirect_to products_path, notice: 'Category tag successful'
  	else
  		render :action => :show
  	end
  end

  def destroy
  	@category = Category.find(params[:id])
  	@category.destroy
  end

  private
  def category_params
  	params.require(:category).permit(:tag, :product_id)
  end

  def load_product
  	@product = Product.find(params[:product_id])
  end
end
