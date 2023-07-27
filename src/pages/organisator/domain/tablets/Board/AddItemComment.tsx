import { ChangeEvent, KeyboardEvent, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, TextField } from '@mui/material';

// third-party
import { Chance } from 'chance';

// project imports

// assets
import AddPhotoAlternateTwoToneIcon from '@mui/icons-material/AddPhotoAlternateTwoTone';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import AddToDriveTwoToneIcon from '@mui/icons-material/AddToDriveTwoTone';

// types
import { TabletComment } from '@/components/shared/types/tablet';
import useTablet from '@/store/hooks/useTablet'
interface Props {
  itemId: string | false;
}

const chance = new Chance();

// ==============================|| Tablet BOARD - ADD ITEM COMMENT ||============================== //

const AddItemComment = ({ itemId }: Props) => {
  const theme = useTheme();

  const { state: { comments, cards } } = useTablet()

  const [comment, setComment] = useState('');
  const [isComment, setIsComment] = useState(false);

  const addTaskComment = () => {
    if (comment.length > 0) {
      const newComment: TabletComment = {
        id: `${chance.integer({ min: 1000, max: 9999 })}`,
        comment,
        profileId: 'profile-1'
      };



      setComment('');
    } else {
      setIsComment(true);
    }
  };

  const handleAddTaskComment = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      addTaskComment();
    }
  };

  const handleTaskComment = (event: ChangeEvent<HTMLInputElement>) => {
    const newComment = event.target.value;
    setComment(newComment);
    if (newComment.length <= 0) {
      setIsComment(true);
    } else {
      setIsComment(false);
    }
  };

  return (
    <Box
      sx={{
        p: 2.5,
        border: '1px solid',
        borderColor: theme.palette.background.default + 75,
        borderRadius: `5px`
      }}
    >
      <Grid container alignItems="center" spacing={0.5}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            placeholder="Add Comment"
            value={comment}
            onChange={handleTaskComment}
            sx={{
              mb: 2,
              '& input': { bgcolor: 'transparent', p: 0, borderRadius: '0px' },
              '& fieldset': { display: 'none' },
              '& .MuiFormHelperText-root': {
                ml: 0
              },
              '& .MuiOutlinedInput-root': {
                bgcolor: 'transparent'
              }
            }}
            onKeyUp={handleAddTaskComment}
            helperText={isComment ? 'Comment is required.' : ''}
            error={isComment}
          />
        </Grid>
        <Grid item>
          <Button variant="text" color="primary" sx={{ p: 0.5, minWidth: 32 }}>
            <AddPhotoAlternateTwoToneIcon />
          </Button>
        </Grid>
        <Grid item>
          <Button variant="text" color="primary" sx={{ p: 0.5, minWidth: 32 }}>
            <AttachFileTwoToneIcon />
          </Button>
        </Grid>
        <Grid item>
          <Button variant="text" color="primary" sx={{ p: 0.5, minWidth: 32 }}>
            <AddToDriveTwoToneIcon />
          </Button>
        </Grid>
        <Grid item xs zeroMinWidth />
        <Grid item>
          <Button variant="contained" color="primary" onClick={addTaskComment}>
            Comment
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddItemComment;
