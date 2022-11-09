import React from 'react';

const SearchHighlightComponent = ({ value, keyword }) => {
  const getHighlightedText = (text, keyword) => {
    let splitWords = text.split(new RegExp(`(${keyword})`, 'gi'));
    return splitWords.map((splitWord, index) => (
      <span key={index}>
        {splitWord.toLowerCase() === keyword.toLowerCase() ? (
          <b
            style={{
              backgroundColor: 'rgba(51,51,51,0.2)',
              color: 'rgba(12,12,12,1)',
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
