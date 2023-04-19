import React, { useEffect } from 'react';
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  ListItemDecorator,
  IconButton,
  LinearProgress,
} from '@mui/joy';

import Students from './students';
import Teachers from './teachers';
import Staffs from './staffs';
import Drivers from './drivers';

import AddIcon from '@mui/icons-material/Add';
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import DirectionsBusTwoToneIcon from '@mui/icons-material/DirectionsBusTwoTone';

import {
  useSearchParams,
  Outlet,
  Link,
  useLocation,
  Await,
  useLoaderData,
} from 'react-router-dom';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { dashboardPromise } = useLoaderData();

  useEffect(() => {
    if (!searchParams.get('tab')) {
      setSearchParams({ tab: 'students' });
    }
  }, []);
  return (
    <>
      <IconButton
        variant="solid"
        color="primary"
        component={Link}
        to={`create${location.search}`}
        sx={(theme) => ({
          p: theme.spacing(3),
          position: 'fixed',
          borderRadius: 100,
          bottom: 50,
          right: 50,
          zIndex: theme.zIndex.tooltip + 1,
        })}
      >
        <AddIcon />
      </IconButton>
      <Outlet />
      <Tabs
        value={searchParams.get('tab')}
        sx={{ borderRadius: 'lg', height: '100vh' }}
      >
        <TabList>
          <Tab
            value="students"
            orientation="vertical"
            onChange={(e, value) => setSearchParams({ tab: value })}
          >
            <ListItemDecorator>
              <GroupAddTwoToneIcon />
            </ListItemDecorator>
            Students
          </Tab>
          <Tab
            value="teachers"
            orientation="vertical"
            onChange={(e, value) => setSearchParams({ tab: value })}
          >
            <ListItemDecorator>
              <SchoolTwoToneIcon />
            </ListItemDecorator>
            Teachers
          </Tab>
          <Tab
            value="staffs"
            orientation="vertical"
            onChange={(e, value) => setSearchParams({ tab: value })}
          >
            <ListItemDecorator>
              <Groups2TwoToneIcon />
            </ListItemDecorator>
            Staffs
          </Tab>
          <Tab
            value="drivers"
            orientation="vertical"
            onChange={(e, value) => setSearchParams({ tab: value })}
          >
            <ListItemDecorator>
              <DirectionsBusTwoToneIcon />
            </ListItemDecorator>
            Drivers
          </Tab>
        </TabList>
        <React.Suspense
          fallback={<LinearProgress sx={{ flex: 'none' }} thickness={10} />}
        >
          <Await
            resolve={delay(4000).then(() => dashboardPromise)}
            errorElement={<p>loading data error...</p>}
          >
            <TabPanel value="students" sx={{ p: 2 }}>
              <Students />
            </TabPanel>
            <TabPanel value="teachers" sx={{ p: 2 }}>
              <Teachers />
            </TabPanel>
            <TabPanel value="staffs" sx={{ p: 2 }}>
              <Staffs />
            </TabPanel>
            <TabPanel value="drivers" sx={{ p: 2 }}>
              <Drivers />
            </TabPanel>
          </Await>
        </React.Suspense>
      </Tabs>
    </>
  );
};

export default Dashboard;
