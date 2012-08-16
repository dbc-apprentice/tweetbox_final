class HashtagsController < ApplicationController
  def show
    @user = User.find(:first, :conditions => ["lower(twitter_name) =?", params[:twitter_name].downcase])
    @hashtag = Hashtag.find_by_text(params[:hashtag])
    @tweets = []
    @user.tweets.each do |tweet|
      if tweet.hashtags.include?(@hashtag)
          @tweets << tweet
      end
    end

  end
end