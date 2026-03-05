import React, { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import Header from '../header/Header';

const Layout = ({ children }) => {
    const { isExpanded, layoutPosition, backgroundImageStyle, isNavExpanded, isRtl, isSmallScreen } = useContext(DashboardContext);

    return (
        <div
            className={`body-padding body-p-top ${isNavExpanded.isSmall && !isExpanded ? 'expanded' : isExpanded && isNavExpanded.reset ? 'expanded' : ''
            } ${isNavExpanded.reset && isExpanded ? 'reset' : ''
            } ${layoutPosition.horizontal ? 'overflow-hidden has-horizontal' : ''
            } ${layoutPosition.twoColumn ? 'has-two-column-menu has-fixed-sidebar' : ''
            } ${layoutPosition.flush ? 'overflow-hidden' : ''
            } ${layoutPosition.twoColumn && isExpanded && !isSmallScreen ? 'has-two-column-menu expanded has-fixed-sidebar' : ''
            } ${isNavExpanded.hoverOpen && isNavExpanded.hover ? 'overflow-hidden hover-menu' : ''
            } ${isRtl ? 'rtl-view' : ''
            }
      `}
            style={backgroundImageStyle}
            dir={`${isRtl ? 'rtl' : ''}`}
        >
            <Header />
            {children}
        </div>
    );
};

export default Layout;
