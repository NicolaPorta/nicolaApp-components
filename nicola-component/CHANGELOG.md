# Changelog for @spindox/siae-actionbar

## 2.5.2

- Change transition animation according to the customer preferences

## 2.5.1

- Add useHeaderHeight
- the logic for the actionbar visibility now consider the header height too

## 2.5.0

- Renamed externalRef into visibilityToggleRef
- Removed isVisibleWithRef prop
- Add enableGridLayout prop to decide if the children inside visibilityToggleRef will be rendered inside of a default grid configuration (enableGridLayout = true) or are already formatted (enableGridLayout = false)

### Upgrade steps:

- Re-name externalRef into visibilityToggleRef
- Remove isVisibleWithRef

## 2.4.0

- Added alignItems optional prop.
- Updated demo to show a possible view solution for small devices utilizing alignItems and direction

## 2.3.0

- Added externalRef and isVisibleWithRef optional prop to control the action-bar visibility

## 2.2.1

- Bugfix: remove the extra top-bottom padding from grid container

## 2.2.0

- let the actionbar's background expand to the full screen while its content stays constrained within a 1280 px max-wide container

# Upgrade Steps

just keep in mind that when the gutters prop is undefined (by-default now, it was 2 before) the useSpacing hooks is used instead.

## 2.1.0

- support maxWidth

## 2.0.2

- Update skeleton dev dep to fix the Demo

## 2.0.1

- Remove custom theme from demo, import theme package
- Add material-ui/core 4.9.x peer dep
- Remove material-ui/core from normal dependencies as it will be inherited

## 2.0.0

- Supports siae-theme v3.x
- Update theme and fix import
- Add theme dependency

### Upgrade steps:

- Update siae-theme to v3, that is the minimum supported version now

## 1.0.0

- First version: check the demo on how to use it.
