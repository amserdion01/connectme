import React, { useState } from 'react';
import { api } from '~/utils/api';
import { FaStar } from 'react-icons/fa';
import Image from "next/image";

const Reviews: React.FC<{ id: string }> = ({ id }) => {
  const reviews = api.review.getAllReviews.useQuery({ serverId: id });
  const [showReviews, setShowReviews] = useState(false);
  
  const handleShowReviews = () => {
    setShowReviews(!showReviews);
  };

  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= rating ? 'text-yellow-500' : 'text-gray-300'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="mx-auto w-full lg:w-2/3 xl:w-1/2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        onClick={handleShowReviews}
      >
        Show Reviews
      </button>
      {showReviews && (
        <div className="mt-4">
          {reviews.data?.length > 0 ? reviews.data.map((review) => (
            <div
              key={review.id}
              className="border border-gray-300 rounded-lg p-4 mb-4"
            >
              <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                  {review.User?.image && (
                    <Image
                      alt="Profile picture"
                      src={review.User.image}
                      width={50}
                      height={50}
                      className="rounded-full object-cover mr-4"
                    />
                  )}
                  <h3 className="text-lg font-semibold">{review.User.name}</h3>
                </div>
                <div className="flex items-center">
                  {renderRatingStars(review.rating)}
                </div>
              </div>
              <h2 className="text-2xl font-semibold mt-2">{review.title}</h2>
              <p className="text-gray-600 mt-2">{review.description}</p>
            </div>
          )) : (
            <div className="border border-gray-300 rounded-lg p-4 text-center">
              <p className="text-2xl font-semibold text-gray-500">No reviews yet.</p>
              <p className="text-lg text-gray-400">Be the first to leave a review!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Reviews;
