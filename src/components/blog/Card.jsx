import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import useBlogCalls from '../../hooks/useBlogCalls';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Icon } from '@mui/material';
import { Icons } from 'react-toastify';
import { lightGreen } from '@mui/material/colors';
export default function MultiActionAreaCard({blog}) {
 
  return (
    <Card elevation={20} sx={{ maxWidth: 400,mt:2 ,mb:2}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={blog.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {blog.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' , display: '-webkit-box',
              WebkitLineClamp: 2, // İki satır göster
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',}}>
            {blog.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display:"flex",justifyContent:"space-between"}}>
      <Typography sx={{display:"flex",gap:3}}>
        <Typography><FavoriteIcon/></Typography>
        <Typography><ModeCommentIcon/></Typography>
        <Typography><VisibilityIcon/></Typography>
        </Typography>
        <Button size="small"  sx={{backgroundColor:"primary.main",color:"black",p:1}}>
         READ MORE
        </Button>
      </CardActions>
    </Card>
  );
}
