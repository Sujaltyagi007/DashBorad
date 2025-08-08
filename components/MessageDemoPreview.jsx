import React from "react";
const MessageDemoPreview = ({ item }) => {
  const Name = item.name;
  const firstLetter = Name.charAt(0);
  return (
    <div className="max-w-4xl mx-auto  p-6  shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
          {item.subject}
        </h1>
      </div>
      {/* Sender Info */}
      <div className="flex items-center mb-4 space-x-3">
        <div className="flex-shrink-0">
          <div className="size-8 rounded-full bg-blue-600 flex text-center justify-center font-semibold text-xl select-none">
            {firstLetter}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            {item.email}
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">to me</p>
        </div>
        <div className="ml-auto text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
          Mon, Jul 21, 4:10 PM
        </div>
      </div>

      {/* Email Body */}
      <article className="prose max-w-full prose-sm sm:prose lg:prose-lg dark:prose-invert text-gray-900 dark:text-gray-50 whitespace-pre-line break-words">
        Dear User,
        <br />
        <br />
        {item.subject}
        <br />
        <br />
        Thank you
        <br />
        <br />
        {item.teaser}
        <br />
        <br />
      </article>
    </div>
  );
};

export default MessageDemoPreview;
