import React, { Children, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useSpacing, Container } from '@spindox/siae-spacing';
import Slide from '@material-ui/core/Slide';
import { useHeaderHeight } from '@spindox/siae-skeleton-md';
const appBarId = 'action-bar';

// something greater than the appbar's default zIndex so that it'll overlap the footer
const getZIndex = theme =>
  theme.zIndex.actionBar ||
  theme.zIndex.footer + 1 ||
  theme.zIndex.appBar + 1 ||
  1101;

const useStyles = makeStyles(theme => ({
  appBar: props => ({
    top: 'auto',
    bottom: 0,
    zIndex: getZIndex(theme),
    backgroundColor: props.backgroundColor,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  }),
  centeredMaxWidth: props => ({
    maxWidth:
      (theme.mixins &&
        theme.mixins.actionbar &&
        theme.mixins.actionbar.maxWidth) ||
      (theme.mixins.skeleton && theme.mixins.skeleton.maxWidth) ||
      1280,
    margin: 'auto',
    left: 0,
    right: 0,
    width: '100%',
    paddingRight: theme.spacing(props.gutters || 3),
    paddingLeft: theme.spacing(props.gutters || 3),
    paddingTop: 0,
    paddingBottom: 0,
  }),
}));

/**
 * ActionBar
 * This is a long bar fixed to the bottom of the screen meant to contain buttons or other action components.
 */
const ActionBar = ({
  children,
  gutters,
  spacing = 2,
  appOffsetUpdater,
  direction = 'row',
  alignItems = 'center',
  backgroundColor = 'white',
  appBarProps,
  gridContainerProps,
  gridItemProps,
  visibilityToggleRef,
  enableGridLayout = true,
}) => {
  const defaultSpacing = useSpacing();
  const classes = useStyles({
    backgroundColor,
    gutters: gutters || defaultSpacing,
  });
  const childrenArray = Children.toArray(children);

  const headerHeight = useHeaderHeight();

  const shouldRenderActionbar = visibilityToggleReference => {
    if (visibilityToggleReference) {
      const { current } = visibilityToggleReference;
      const res = current
        ? current.getBoundingClientRect().bottom < headerHeight
        : false;
      return res; // on first render current is not available yet
    }

    return true;
  };

  const [isActionbarVisible, setIsActionbarVisible] = useState(
    shouldRenderActionbar(visibilityToggleRef),
  );

  const handleScroll = () =>
    setIsActionbarVisible(shouldRenderActionbar(visibilityToggleRef));

  // side-effects
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isActionbarVisible && appOffsetUpdater) {
      const actionBarHeight = document.getElementById(appBarId).clientHeight;
      appOffsetUpdater({ deltaBottomOffset: actionBarHeight });
      return function resetOffset() {
        appOffsetUpdater({ deltaBottomOffset: -actionBarHeight });
      };
    }
  }, []); // run only once: didMount

  // This function handle the scroll performance issue
  // const debounce = (func, wait = 20, immediate = true) => {
  //   let timeOut;
  //   return () => {
  //     const context = this;
  //     // eslint-disable-next-line no-undef
  //     const args = arguments;
  //     const later = () => {
  //       timeOut = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     const callNow = immediate && !timeOut;
  //     clearTimeout(timeOut);
  //     timeOut = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return isActionbarVisible ? (
    <Slide
      direction="up"
      in={isActionbarVisible}
      {...(isActionbarVisible ? { timeout: 300 } : {})}
      mountOnEnter
      unmountOnExit
    >
      <AppBar
        id={appBarId}
        position="fixed"
        color="default"
        className={classes.appBar}
        {...appBarProps}
      >
        <Container className={classes.centeredMaxWidth}>
          {!enableGridLayout ? (
            childrenArray
          ) : (
            <Grid
              container
              spacing={spacing}
              justify="flex-end"
              alignItems={alignItems}
              direction={direction}
              {...gridContainerProps}
            >
              {childrenArray.map(child => (
                <Grid item key={child.key} {...gridItemProps}>
                  {child}
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </AppBar>
    </Slide>
  ) : null;
};

export default ActionBar;

ActionBar.propTypes = {
  children: PropTypes.node,
  /** Right and left margin. */
  gutters: PropTypes.number,
  /** Distance between inner items */
  spacing: PropTypes.number,
  /** row renders items left to right, you can guess the rest */
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  /** center renders items in the center, you can guess the rest or go to material-ui docs */
  alignItems: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'stretch',
    'baseline',
  ]),
  appBarProps: PropTypes.object,
  gridContainerProps: PropTypes.object,
  gridItemProps: PropTypes.object,
  /** Callback function called on didMount and will unmount */
  appOffsetUpdater: PropTypes.func,
  backgroundColor: PropTypes.string,
  /** Controls the actionbar visibility */
  visibilityToggleRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
  /** renders the children inside of the visibilityToggleRef using the grid Layout */
  enableGridLayout: PropTypes.bool,
};
