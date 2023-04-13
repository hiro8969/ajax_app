class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

   # コメントアウトする
  # def new
  # end

  def create
    # binding.pry
    post = Post.create(content: params[:content])
    render json:{ post: post }  #追記した
  end

end
