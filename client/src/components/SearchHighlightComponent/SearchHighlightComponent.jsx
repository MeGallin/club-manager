import React from 'react';

const SearchHighlightComponent = ({ value, keyword }) => {
  const getHighlightedText = (text, keyword) => {
    let splitWords = text.split(new RegExp(`(${keyword})`, 'gi'));
    return splitWords.map((splitWord, index) => (
      <span key={index}>
        {splitWord.toLowerCase() === keyword.toLowerCase() ? (
          <b
            style={{
              backgroundColor: 'rgba(245,245,245,1)',
              color: 'rgba(51,51,51,1)',
              paddingLeft: keyword ? '6px' : '0',
            }}
          >
            {splitWord}
          </b>
        ) : (
          splitWord
        )}
      </span>
    ));
  };
  return <p>{getHighlightedText(value, keyword)}</p>;
};

export default SearchHighlightComponent;
