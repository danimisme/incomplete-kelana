const { default: Sidebar } = require("@/components/Layout/Sidebar/Sidebar");

const initialState = {
  sidebarShow: false,
};

const SidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "sidebar/show":
      return { ...state, sidebarShow: true };
    case "sidebar/hide":
      return { ...state, sidebarShow: false };
    default:
      return state;
  }
};

export const showSidebar = () => ({ type: "sidebar/show" });
export const hideSidebar = () => ({ type: "sidebar/hide" });

export default SidebarReducer;
