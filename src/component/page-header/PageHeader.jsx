import React from 'react';
import './page-header.scss'

const PageHeader = ({image, main_title, sub_title, showSearch}) => {
  return (
    <div  className='page-header' style={{backgroundImage: `url(${image})`}}>
        <div className="page-header-content">
            <div className="page-header-text">
                <h2 className='main_title'>{main_title}</h2>
                <p className="sub_title">{sub_title}</p>
            </div>
            {showSearch && 
                <div className="page-header-search-bar">
                    <span className="mdi mdi-map-marker location"></span>
                    <input type="text" placeholder='Search here...'/>
                    <div className="search_icon">
                        <span className="mdi mdi-magnify"></span>
                        <span className="mdi mdi-close"></span>
                    </div>
                </div>
            }
        </div>
        <div className="overlay"></div>
    </div>
  );
}

export default PageHeader;
