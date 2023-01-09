import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import user from "../../../../assets/images/user/user.jpg";

class NavbarRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  render() {
    const open = Boolean(this.state.anchorEl);
    const handleClick = (event) => {
      this.setState({
        anchorEl: event.currentTarget,
      });
    };
    const handleClose = () => {
      this.setState({
        anchorEl: null,
      });
    };
    return (
      <>
        <div className="navbar-right menu-right">
          <ul className="d-flex align-items-center list-inline m-0">
            <li className="nav-item nav-icon">
              <NavLink to="#" className="search-toggle device-search">
                <i className="ri-search-line" />
              </NavLink>
              <div className="search-box iq-search-bar d-search">
                <form action="#" className="searchbox">
                  <div className="form-group position-relative">
                    <input
                      type="text"
                      className="text search-input font-size-12"
                      placeholder="type here to search..."
                    />
                    <i className="search-link ri-search-line" />
                  </div>
                </form>
              </div>
            </li>

            <li className="nav-item nav-icon">
              <Box
                sx={{
                  display: "flex",
                  fontFamily: "Helvetica",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }} src={user}></Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={this.state.anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 999,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <ContactPageIcon fontSize="small" />
                  </ListItemIcon>
                  My Account
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <Divider />

                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default NavbarRight;
