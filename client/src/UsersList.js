import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserIndividual from './UserIndividual';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import DataTable from './DataTable';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

function UsersList() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    try {
      axios
        .get('api/user/getusers')
        .then(function (res) {
          console.log('response getusers');
          console.log(res.data);
          setUserData(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  //map userslist

  const userList = userData.map((user) => {
    return (
      <div key={user._id}>
        <UserIndividual user={user} />
      </div>
    );
  });
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <h2>Users List</h2>

      {<DataTable data={userData} /> || <Skeleton count={5} />}
    </Box>
  );
}

export default UsersList;
