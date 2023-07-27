import React from 'react';
import styled from 'styled-components';
import Link from '@/components/shared/Link';
import DashboardLayout from '@/components/layouts/Dashboard';

import {
  Avatar,
  Card,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Box,
  Fab,
  Typography,
} from '@mui/material';
import {SendSharp} from '@mui/icons-material';

import {
  Breadcrumbs,
  ChatInput,
  ChatSidebar,
  ChatMain,
  ChatMessages,
  ChatMessageAvatar,
  ChatMessageBubbleName,
  ChatMessageInner,
  ChatMessageTime,
  Divider,
  Online,
  TextField,
} from '@/components/shared/styled/chat.styled';
type ChatMessageComponentType = {
  name: string;
  message: string;
  time: string;
  avatar: string;
  position?: 'left' | 'right';
};

const ChatMessage = styled.div<{ position: 'left' | 'right' }>`
  margin: 30px;
  text-align: ${(props) => props.position};
`;
const ChatContainer = styled(Grid)<{ component: React.ReactNode }>`
  width: 100%;
  height: 65vh;
`;
const ChatMessageBubble = styled.div<{ highlighted: boolean }>`
  display: inline-block;
  margin-right: auto;
  background: ${(props) => (props.highlighted ? props.theme.palette.secondary.main : props.theme.palette.action.hover)};
  color: ${(props) => (props.highlighted ? props.theme.palette.common.white : props.theme.palette.text.primary)};
  border-radius: 3px;
  padding: ${(props) => props.theme.spacing(2)}px;
  margin-bottom: ${(props) => props.theme.spacing(1)}px;
  ${(props) => props.theme.shadows[1]};
`;

function ChatMessageComponent({ name, message, time, avatar, position = 'left' }: ChatMessageComponentType) {

  return (
    <ChatMessage position={`${position}`}>
      <ChatMessageInner>
        <ChatMessageAvatar alt="Lucy Lavender" src={avatar} />
        <ChatMessageBubble highlighted={position === 'right'} >
          <Box>
            <ChatMessageBubbleName variant="body1">{name}</ChatMessageBubbleName>
          </Box>
          <Typography variant="body2">{message}</Typography>
        </ChatMessageBubble>
        <ChatMessageTime variant="body2">{time}</ChatMessageTime>
      </ChatMessageInner>
    </ChatMessage>
  );
}

function ChatWindow() {
  //const { theme } = useTheme();
  return (
    <ChatContainer container component={Card}>
      <ChatSidebar item xs={12} md={4} lg={3}>
        <Grid item xs={12}>
          <Box p={2}>
            <TextField label="Search contacts" variant="outlined" fullWidth />
          </Box>
        </Grid>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Online
                overlap="circular"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                variant="dot"
              >
                <Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />
              </Online>
            </ListItemIcon>
            <ListItemText primary="Lucy Lavender" secondary="Sent a photo" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Online
                overlap="circular"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                variant="dot"
              >
                <Avatar alt="Remy Sharp" src="/static/img/avatars/avatar-2.jpg" />
              </Online>
            </ListItemIcon>
            <ListItemText primary="Remy Sharp" secondary="Coffee?" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Avatar alt="Cassandra Mixon" src="/static/img/avatars/avatar-3.jpg" />
            </ListItemIcon>
            <ListItemText primary="Cassandra Mixon" secondary="Hello! 👋" />
          </ListItem>
        </List>
      </ChatSidebar>
      <ChatMain item xs={12} md={8} lg={9}>
        <ChatMessages>
          <ChatMessageComponent
            name="Remy Sharp"
            avatar="/static/img/avatars/avatar-2.jpg"
            message="Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo."
            time="20 minutes ago"
            position="left"
          />
          <ChatMessageComponent
            name="You"
            avatar="/static/img/avatars/avatar-1.jpg"
            message="Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix."
            time="12 minutes ago"
            position="right"
          />
          <ChatMessageComponent
            name="Remy Sharp"
            avatar="/static/img/avatars/avatar-2.jpg"
            message="Cum ea graeci tractatos. 😄"
            time="8 minutes ago"
            position="left"
          />
          <ChatMessageComponent
            name="You"
            avatar="/static/img/avatars/avatar-1.jpg"
            message="Cras pulvinar, sapien id vehicula aliquet, diam velit elementum orci. 👍"
            time="5 minutes ago"
            position="right"
          />
          <ChatMessageComponent
            name="Remy Sharp"
            avatar="/static/img/avatars/avatar-2.jpg"
            message="Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix."
            time="3 minutes ago"
            position="left"
          />
        </ChatMessages>
        <Divider />
        <ChatInput container>
          <Grid item style={{ flexGrow: 1 }}>
            <TextField variant="outlined" label="Type your message" fullWidth />
          </Grid>
          <Grid item>
            <Box ml={2}>
              <Fab color="primary" aria-label="add" size="medium">
                <SendSharp />
              </Fab>
            </Box>
          </Grid>
        </ChatInput>
      </ChatMain>
    </ChatContainer>
  );
}

function Chat() {
  return (
    <React.Fragment>
      <DashboardLayout >
        <Typography variant="h3" gutterBottom display="inline">
          Chat
        </Typography>
        <Breadcrumbs aria-label="Breadcrumb" >
          <Link href="/">Dashboard</Link>
          <Link href="/">Pages</Link>
          <Typography>Chat</Typography>
        </Breadcrumbs>

        <Divider  />

        <ChatWindow />
      </DashboardLayout>
    </React.Fragment>
  );
}

export default Chat;
