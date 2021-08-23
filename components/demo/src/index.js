import React, { useState, useRef } from 'react';
import { render } from 'react-dom';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';

import Skeleton from '@spindox/siae-skeleton-md';
import { useSpacing } from '@spindox/siae-spacing';
import { theme } from '@spindox/siae-theme';

import headerProps from './skeleton/headerProps';
import footerProps from './skeleton/footerProps';
import ActionBar from '../../src';

const useStyles = makeStyles(() => ({
  offset: props => ({
    minHeight: (props && props.bottomOffset) || 0,
  }),
}));

const maxOffsetAllowed = 60;
const getBottomOffset = (deltaBottomOffset, prevOffset) => {
  if (deltaBottomOffset > 0) {
    const newOffset = Math.max(deltaBottomOffset, prevOffset);
    return Math.min(maxOffsetAllowed, newOffset);
  }
  if (deltaBottomOffset < 0) {
    const newOffset = prevOffset + deltaBottomOffset;
    return Math.min(maxOffsetAllowed, Math.max(0, newOffset));
  }
  return prevOffset;
};

const Demo = () => {
  const spacing = useSpacing();
  const [bottomOffset, setBottomOffset] = useState(0);
  const classes = useStyles({ bottomOffset });
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('xs'));
  const alignItems = isMobile ? 'stretch' : 'center';
  const direction = isMobile ? 'column-reverse' : 'row-reverse';

  const updateBottomOffset = offset => {
    const newOffset = getBottomOffset(offset.deltaBottomOffset, bottomOffset);
    setBottomOffset(newOffset);
  };

  // the actionBar visibility will depend on the refContainer scroll position
  // in this demo the action-bar is visible when the button is not
  const refContainer = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <Skeleton
        config={{
          header: headerProps(spacing),
          footer: footerProps(spacing),
          title: 'Skeleton',
        }}
      >
        <h1>@spindox/siae-action-bar Demo</h1>
        <Button ref={refContainer}>
          If you see me, You will not see the action-bar. Scroll down
        </Button>

        <ActionBar
          direction={direction} // default is row
          // gutters={4} // by default gets the useSpacing
          spacing={2}
          appOffsetUpdater={updateBottomOffset}
          visibilityToggleRef={refContainer}
          alignItems={alignItems}
        >
          <Button xs={12} fullWidth variant="text">
            Secondary Action
          </Button>
          <Button xs={12} fullWidth>
            Primary Action
          </Button>
        </ActionBar>
      </Skeleton>
      <div className={classes.offset} />
    </ThemeProvider>
  );
};

render(<Demo />, document.querySelector('#demo'));
