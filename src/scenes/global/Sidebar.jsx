import { useState } from 'react';
import { Menu, MenuItem, Sidebar as ProSidebar, useProSidebar } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import { 
    PeopleOutlineOutlined,
    HomeOutlined,
    ContactsOutlined,
    ReceiptOutlined,
    PersonOutline,
    CalendarTodayOutlined,
    HelpOutlined,
    BarChartOutlined,
    PieChartOutlined,
    TimelineOutlined,
    MenuOutlined,
    MapOutlined
 } from '@mui/icons-material';


 const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
        <MenuItem 
            active={selected === title} 
            style={{ color: colors.grey[100]}} 
            onClick={() => setSelected(title)}
            icon={icon}
            className="menu-icon"
            component={<Link to={to} /> }
        >
            <Typography>{title}</Typography>
        </MenuItem>
    )
 }

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const [collapsed, setcollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

  return (
    <Box
        sx={{
            "& .ps-sidebar-container": {
                background: `${colors.primary[400]} !important`
            },
            "& .ps-menu-icon": {
                backgroundColor: "transparent !important"
            },
            "& .ps-menu-button": {
                padding: "5px 35px 5px 20px !important"
            },
            "& .ps-menu-button:hover": {
                color: "#868dfb !important",
                backgroundColor: "transparent !important"
            },
            "& .ps-menu-button.ps-active": {
                color: "#6870fa !important",
            },
        }}
    >
        <ProSidebar collapsed={collapsed}>
            <Menu iconShape="square">
            {/* LOGO AND MENU ICON */}
            <MenuItem
                onClick={() => collapseSidebar(!collapsed)}
                icon={collapsed ? <MenuOutlined /> : undefined}
                style={{
                    margin: "10px 0 20px 0",
                    color: colors.grey[100],
                }}
            >
                {!collapsed && (
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        ml="15px"
                    >
                        <Typography variant="h3" color={colors.grey[100]}>
                            ADMIN
                        </Typography>
                        <IconButton onClick={() => collapseSidebar(!collapsed)}>
                        <MenuOutlined />
                        </IconButton>
                    </Box>
                )}
            </MenuItem>

            {/* USER */}
            {!collapsed && (
                <Box mb="25px">
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <img 
                            alt="profile-user"
                            width="100px"
                            height="100px"
                            src={`./assets/user.jpg`}
                            style={{ cursor: 'pointer', borderRadius: "50%" }}
                        />
                    </Box>

                    <Box textAlign="center">
                        <Typography 
                            variant='h3'
                            color={colors.grey[100]} 
                            fontWeight="bold" 
                            sx={{ m: "10px 0 0 0" }}
                        >
                            Olaniyi Olamide
                        </Typography>
                        <Typography 
                            variant='h5'
                            color={colors.greenAccent[500]}
                        >
                            Admin Dashboard
                        </Typography>
                    </Box>
                </Box>
            )}

            {/* MENU */}
            <Box paddingLeft={collapsed ? undefined : "10%"}>
                <Item 
                    title="Dashboard"
                    to="/"
                    icon={<HomeOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Typography 
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px"}}
                >
                    Data
                </Typography>
                <Item 
                    title="Manage Team"
                    to="/team"
                    icon={<PeopleOutlineOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item 
                    title="Contacts Information"
                    to="/contacts"
                    icon={<ContactsOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item 
                    title="Invoice Balances"
                    to="/invoices"
                    icon={<ReceiptOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Typography 
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px"}}
                >
                    Pages
                </Typography>
                <Item 
                    title="Profile Form"
                    to="/form"
                    icon={<PeopleOutlineOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item 
                    title="Calendar"
                    to="/calendar"
                    icon={<CalendarTodayOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item 
                    title="FAQ Page"
                    to="/faq"
                    icon={<HelpOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Typography 
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px"}}
                >
                    Charts
                </Typography>
                <Item 
                    title="Bar Chart"
                    to="/bar"
                    icon={<BarChartOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item 
                    title="Pie Chart"
                    to="/pie"
                    icon={<PieChartOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item 
                    title="Line Chart"
                    to="/line"
                    icon={<TimelineOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item 
                    title="Geography Chart"
                    to="/geography"
                    icon={<MapOutlined />}
                    selected={selected}
                    setSelected={setSelected}
                />
            </Box>
            </Menu>
        </ProSidebar>
    </Box>
  )
}

export default Sidebar