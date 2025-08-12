# Digital India Community Forum - Detailed UI Mockup

## Page Overview
The Community Forum connects Indian entrepreneurs for knowledge sharing, networking, and peer support with Digital India theme integration.

## Forum Header and Navigation
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ COMMUNITY FORUM HEADER                                                          │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ 💬 Community Forum                                                             │
│ (H1: Inter 700, 36px, #1565C0, margin-bottom: 8px)                            │
│                                                                                 │
│ Connect with fellow founders, ask questions, and share experiences              │
│ (Subtitle: Inter 400, 18px, #757575, margin-bottom: 32px)                     │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ FORUM NAVIGATION TABS                                                       │ │
│ │                                                                             │ │
│ │ [🔥 Hot] [📝 Recent] [❓ Questions] [💡 Tips] [🏆 Success Stories]          │ │
│ │ ──────── (Active tab underline: #1565C0, 3px)                              │ │
│ │ (Tabs: Inter 500, 16px, active: #1565C0, inactive: #757575)               │ │
│ │                                                                             │ │
│ │                                                    [➕ New Post]            │ │
│ │                                                    (Contained button,       │ │
│ │                                                     #1565C0 bg)             │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Main Forum Layout
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ MAIN FORUM LAYOUT                                                               │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ MAIN FEED (70% width)                 │ SIDEBAR (30% width)                    │
│                                       │                                        │
│ ┌───────────────────────────────────┐ │ ┌────────────────────────────────────┐ │
│ │ POST CARD 1                       │ │ │ TRENDING TOPICS                    │ │
│ │                                   │ │ │                                    │ │
│ │ ┌─────────────────────────────────┐ │ │ │ 🔥 Trending Topics                 │ │
│ │ │ 👤 Priya Sharma • 2 hours ago   │ │ │ │ (H6: Inter 600, 18px, #FF6B35)    │ │
│ │ │ (Avatar + Name: Inter 500, 14px,│ │ │ │                                    │ │
│ │ │  #212121, timestamp: 12px,      │ │ │ │ #GST-Registration (45 posts)       │ │
│ │ │  text.secondary)                │ │ │ │ #Company-Formation (32 posts)      │ │
│ │ └─────────────────────────────────┘ │ │ │ #Funding-Rounds (28 posts)         │ │
│ │                                   │ │ │ │ #Maharashtra-Policy (15 posts)     │ │
│ │ ┌─────────────────────────────────┐ │ │ │                                    │ │
│ │ │ [❓ Question] [GST] [Maharashtra]│ │ │ │ (List: clickable hashtags with     │ │
│ │ │ (Tags: small chips, outlined,   │ │ │ │  post counts)                      │ │
│ │ │  various colors)                │ │ │ └────────────────────────────────────┘ │
│ │ └─────────────────────────────────┘ │ │                                        │
│ │                                   │ │ ┌────────────────────────────────────┐ │
│ │ GST Registration for Tech Startup │ │ │ ACTIVE MEMBERS                     │ │
│ │ (H5: Inter 600, 20px, #212121)   │ │ │                                    │ │
│ │                                   │ │ │ │ 👥 Active Members                  │ │
│ │ I'm registering my SaaS startup   │ │ │ │ (H6: Inter 600, 18px, #1565C0)    │ │
│ │ in Pune. Do I need GST if my      │ │ │ │                                    │ │
│ │ revenue is under ₹20 lakhs?       │ │ │ │ 🟢 Rajesh Kumar (CA)               │ │
│ │ Looking for guidance from         │ │ │ │ 🟢 Sneha Reddy (Lawyer)            │ │
│ │ experienced founders...           │ │ │ │ 🟡 Vikram Singh (Founder)          │ │
│ │ (Body1: Inter 400, 16px,          │ │ │ │ 🟢 Meera Joshi (CS)                │ │
│ │  text.primary, line-height: 1.6) │ │ │ │                                    │ │
│ │                                   │ │ │ │ (List: online status indicators,   │ │
│ │ ┌─────────────────────────────────┐ │ │ │  professional titles)              │ │
│ │ │ 👍 12  💬 8  🔗 Share  ⭐ Save  │ │ │ └────────────────────────────────────┘ │
│ │ │ (Interaction buttons: text      │ │ │                                        │
│ │ │  style, #1565C0 color)          │ │ │ ┌────────────────────────────────────┐ │
│ │ └─────────────────────────────────┘ │ │ │ YOUR STATS                         │ │
│ │                                   │ │ │                                    │ │
│ │ ┌─────────────────────────────────┐ │ │ │ 📊 Your Community Stats            │ │
│ │ │ 💬 View 8 Answers               │ │ │ │ (H6: Inter 600, 18px, #FF6B35)    │ │
│ │ │ (Button: text style, #1565C0)   │ │ │ │                                    │ │
│ │ └─────────────────────────────────┘ │ │ │ Posts: 5                           │ │
│ └───────────────────────────────────┘ │ │ │ Helpful Answers: 12                │ │
│                                       │ │ │ Reputation: 156 points             │ │
│ ┌───────────────────────────────────┐ │ │ │ Badge: 🥉 Helper                   │ │
│ │ POST CARD 2                       │ │ │ │                                    │ │
│ │                                   │ │ │ │ [Ask Question] [Share Success]     │ │
│ │ ┌─────────────────────────────────┐ │ │ │ (Buttons: contained, outlined)     │ │
│ │ │ 👤 Amit Patel • 4 hours ago     │ │ │ └────────────────────────────────────┘ │
│ │ └─────────────────────────────────┘ │ │                                        │
│ │                                   │ │ ┌────────────────────────────────────┐ │
│ │ ┌─────────────────────────────────┐ │ │ │ QUICK ACTIONS                      │ │
│ │ │ [💡 Tip] [Funding] [All States] │ │ │ │                                    │ │
│ │ └─────────────────────────────────┘ │ │ │ 🔍 Search Posts                    │ │
│ │                                   │ │ │ │ 📝 Write Article                   │ │
│ │ 5 Mistakes to Avoid When Pitching │ │ │ │ 👥 Find Mentors                    │ │
│ │ to Indian VCs                     │ │ │ │ 📅 Upcoming Events                 │ │
│ │                                   │ │ │ │ 💼 Job Board                       │ │
│ │ Just closed our Series A! Here    │ │ │ │                                    │ │
│ │ are the top mistakes I see        │ │ │ │ (List: clickable action items)     │ │
│ │ founders make when pitching...    │ │ │ └────────────────────────────────────┘ │
│ │                                   │ │                                        │
│ │ 👍 45  💬 23  🔗 Share  ⭐ Save   │ │                                        │
│ └───────────────────────────────────┘ │                                        │
└─────────────────────────────────────────────────────────────────────────────────┘
```## Foru
m Post Component
```typescript
const ForumPostCard = ({ 
  post, 
  onLike, 
  onComment, 
  onShare, 
  onSave 
}: {
  post: ForumPost;
  onLike: () => void;
  onComment: () => void;
  onShare: () => void;
  onSave: () => void;
}) => (
  <Card
    sx={{
      p: 3,
      mb: 3,
      borderRadius: 3,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
      }
    }}
  >
    {/* Author Header */}
    <Box display="flex" alignItems="center" gap={2} mb={2}>
      <Avatar 
        src={post.author.avatar} 
        sx={{ width: 40, height: 40 }}
      >
        {post.author.initials}
      </Avatar>
      <Box flex={1}>
        <Typography variant="subtitle1" fontWeight={500}>
          {post.author.name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {post.timestamp} • {post.author.location}
        </Typography>
      </Box>
      {post.author.verified && (
        <Chip 
          label="Verified" 
          size="small" 
          sx={{ 
            bgcolor: '#388E3C20', 
            color: '#388E3C',
            fontSize: '0.75rem'
          }} 
        />
      )}
    </Box>

    {/* Post Tags */}
    <Box display="flex" gap={1} mb={2} flexWrap="wrap">
      <Chip 
        label={post.type} 
        size="small" 
        sx={{ 
          bgcolor: getTypeColor(post.type),
          color: 'white',
          fontWeight: 500
        }} 
      />
      {post.tags.map((tag, index) => (
        <Chip 
          key={index}
          label={tag} 
          size="small" 
          variant="outlined"
          sx={{ 
            borderColor: '#1565C040',
            color: '#1565C0',
            fontSize: '0.75rem'
          }}
        />
      ))}
    </Box>

    {/* Post Title */}
    <Typography 
      variant="h5" 
      fontWeight={600} 
      gutterBottom
      sx={{ 
        cursor: 'pointer',
        '&:hover': { color: '#1565C0' }
      }}
    >
      {post.title}
    </Typography>

    {/* Post Content */}
    <Typography 
      variant="body1" 
      color="text.primary" 
      sx={{ 
        mb: 3, 
        lineHeight: 1.6,
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}
    >
      {post.content}
    </Typography>

    {/* Interaction Bar */}
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center" gap={3}>
        <Button
          startIcon={<ThumbUpIcon />}
          onClick={onLike}
          sx={{ 
            color: post.liked ? '#1565C0' : 'text.secondary',
            minWidth: 'auto',
            p: 0.5
          }}
        >
          {post.likes}
        </Button>
        
        <Button
          startIcon={<CommentIcon />}
          onClick={onComment}
          sx={{ 
            color: 'text.secondary',
            minWidth: 'auto',
            p: 0.5
          }}
        >
          {post.comments}
        </Button>
        
        <Button
          startIcon={<ShareIcon />}
          onClick={onShare}
          sx={{ 
            color: 'text.secondary',
            minWidth: 'auto',
            p: 0.5
          }}
        >
          Share
        </Button>
        
        <Button
          startIcon={<BookmarkIcon />}
          onClick={onSave}
          sx={{ 
            color: post.saved ? '#FF6B35' : 'text.secondary',
            minWidth: 'auto',
            p: 0.5
          }}
        >
          Save
        </Button>
      </Box>

      {post.comments > 0 && (
        <Button
          variant="text"
          onClick={onComment}
          sx={{ color: '#1565C0' }}
        >
          View {post.comments} {post.comments === 1 ? 'Answer' : 'Answers'}
        </Button>
      )}
    </Box>
  </Card>
);
```

## Post Detail View
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ POST DETAIL VIEW                                                                │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ← Back to Forum                                                                 │
│ (Link: Inter 500, 14px, #1565C0, margin-bottom: 24px)                         │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ ORIGINAL POST (Expanded view)                                               │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 👤 Priya Sharma • 2 hours ago • Mumbai                                  │ │ │
│ │ │ (Author info with location and timestamp)                               │ │ │
│ │ │                                                                         │ │ │
│ │ │ [❓ Question] [GST] [Maharashtra] [Tech Startup]                        │ │ │
│ │ │ (Tags: colorful chips with category colors)                             │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ GST Registration for Tech Startup                                           │ │
│ │ (H3: Inter 700, 28px, #212121, margin-bottom: 16px)                       │ │
│ │                                                                             │ │
│ │ I'm registering my SaaS startup in Pune. Do I need GST registration        │ │
│ │ if my revenue is under ₹20 lakhs? I've heard conflicting information       │ │
│ │ about this and want to make sure I'm compliant from day one.               │ │
│ │                                                                             │ │
│ │ My startup details:                                                         │ │
│ │ • B2B SaaS platform                                                        │ │
│ │ • Expected revenue: ₹15 lakhs in first year                                │ │
│ │ • Serving clients across India                                             │ │
│ │ • Planning to expand internationally                                        │ │
│ │                                                                             │ │
│ │ Any guidance from experienced founders or CAs would be greatly appreciated! │ │
│ │ (Body1: Inter 400, 16px, text.primary, line-height: 1.6)                  │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 👍 12  💬 8  🔗 Share  ⭐ Save  🏷️ Follow                               │ │ │
│ │ │ (Interaction buttons with enhanced options)                             │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ ANSWERS SECTION                                                             │ │
│ │                                                                             │ │
│ │ 8 Answers                                                                   │ │
│ │ (H5: Inter 600, 20px, #212121, margin-bottom: 24px)                       │ │
│ │                                                                             │ │
│ │ [Best Answer] [Most Recent] [Most Liked]                                    │ │
│ │ ──────────── (Sort tabs)                                                   │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ ANSWER 1 (Best Answer)                                                  │ │ │
│ │ │                                                                         │ │ │
│ │ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │ │
│ │ │ │ 👤 Rajesh Kumar, CA • 1 hour ago                                    │ │ │ │
│ │ │ │ (Avatar + Name + Professional title)                                │ │ │ │
│ │ │ │                                                                     │ │ │ │
│ │ │ │ ⭐ Best Answer  🏆 Expert  ✅ Verified                              │ │ │ │
│ │ │ │ (Badges: best answer, expert status, verification)                 │ │ │ │
│ │ │ └─────────────────────────────────────────────────────────────────────┘ │ │ │
│ │ │                                                                         │ │ │
│ │ │ Great question! For SaaS startups, GST registration is mandatory       │ │ │
│ │ │ regardless of turnover if you're providing services to businesses      │ │ │
│ │ │ in other states (inter-state supply).                                  │ │ │
│ │ │                                                                         │ │ │
│ │ │ Key points for your situation:                                          │ │ │
│ │ │ • B2B SaaS = Business service                                           │ │ │
│ │ │ • Serving clients across India = Inter-state supply                    │ │ │
│ │ │ • GST registration is mandatory from day 1                             │ │ │
│ │ │                                                                         │ │ │
│ │ │ I recommend registering immediately to avoid penalties.                 │ │ │
│ │ │ (Body1: Inter 400, 16px, text.primary, detailed answer)               │ │ │
│ │ │                                                                         │ │ │
│ │ │ 👍 25  💬 Reply  🔗 Share  📋 Helpful                                  │ │ │
│ │ │ (Answer interaction buttons)                                            │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ ANSWER 2                                                                │ │ │
│ │ │                                                                         │ │ │
│ │ │ 👤 Sneha Reddy, Startup Lawyer • 45 minutes ago                        │ │ │
│ │ │                                                                         │ │ │
│ │ │ Adding to Rajesh's excellent answer - also consider that GST           │ │ │
│ │ │ registration gives you input tax credit benefits and makes your        │ │ │
│ │ │ business look more professional to enterprise clients...               │ │ │
│ │ │                                                                         │ │ │
│ │ │ 👍 18  💬 Reply  🔗 Share                                              │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ [Load More Answers...]                                                      │ │
│ │ (Button: text style, center aligned)                                       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ WRITE ANSWER SECTION                                                        │ │
│ │                                                                             │ │
│ │ Your Answer                                                                 │ │
│ │ (H6: Inter 600, 18px, #212121)                                             │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Write your answer here...                                               │ │ │
│ │ │ (TextField: multiline, 4 rows, outlined, full width)                   │ │ │
│ │ │                                                                         │ │ │
│ │ │ [B] [I] [Link] [Code] [List]                                            │ │ │
│ │ │ (Rich text editor toolbar)                                              │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ [Cancel] [Post Answer]                                                      │ │
│ │ (Buttons: outlined, contained respectively)                                 │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## New Post Creation Modal
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ NEW POST MODAL (Overlay with backdrop blur)                                    │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ MODAL HEADER                                                                │ │
│ │                                                                             │ │
│ │ ➕ Create New Post                                                ✕         │ │
│ │ (H4: Inter 700, 24px, #1565C0)                          (Close button)     │ │
│ │                                                                             │ │
│ │ Share your knowledge with the community                                     │ │
│ │ (Subtitle: Inter 400, 16px, text.secondary)                               │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ POST TYPE SELECTION                                                         │ │
│ │                                                                             │ │
│ │ What type of post is this?                                                  │ │
│ │ (H6: Inter 600, 16px, #212121)                                             │ │
│ │                                                                             │ │
│ │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │ │
│ │ │     ❓      │ │     💡      │ │     🏆      │ │     📰      │           │ │
│ │ │  Question   │ │    Tip      │ │   Success   │ │    News     │           │ │
│ │ │             │ │             │ │    Story    │ │             │           │ │
│ │ │ Ask for help│ │ Share advice│ │ Celebrate   │ │ Share       │           │ │
│ │ │ or guidance │ │ and tips    │ │ achievements│ │ industry    │           │ │
│ │ │             │ │             │ │             │ │ updates     │           │ │
│ │ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘           │ │
│ │ (Cards: clickable, selected state with border)                             │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ POST FORM                                                                   │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Post Title                                                              │ │ │
│ │ │ (TextField: outlined, full width, placeholder: "What's your question?") │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Tags                                                                    │ │ │
│ │ │ (Autocomplete: multiple selection, popular tags suggested)              │ │ │
│ │ │                                                                         │ │ │
│ │ │ [GST] [Startup] [Maharashtra] [Technology] [Funding]                    │ │ │
│ │ │ (Suggested tags: clickable chips)                                       │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Post Content                                                            │ │ │
│ │ │ (Rich text editor: multiline, 8 rows, with formatting toolbar)         │ │ │
│ │ │                                                                         │ │ │
│ │ │ [B] [I] [U] [Link] [Code] [List] [Image] [Mention]                      │ │ │
│ │ │ (Toolbar: bold, italic, underline, link, code, list, image, mention)   │ │ │
│ │ │                                                                         │ │ │
│ │ │ Describe your question in detail. Include context, what you've          │ │ │
│ │ │ tried, and what specific help you need...                               │ │ │
│ │ │ (Placeholder text with guidance)                                        │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 💡 Writing Tips                                                         │ │ │
│ │ │                                                                         │ │ │
│ │ │ • Be specific about your situation and location                         │ │ │
│ │ │ • Include relevant details (business type, stage, etc.)                 │ │ │
│ │ │ • Use appropriate tags to reach the right audience                      │ │ │
│ │ │ • Search existing posts to avoid duplicates                             │ │ │
│ │ │ (Tips box: light blue background, info styling)                        │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ ACTION BUTTONS                                                              │ │
│ │                                                                             │ │
│ │ [Cancel] [Save Draft] [Post to Community]                                  │ │
│ │ (Buttons: text, outlined, contained respectively)                          │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Mobile Community Forum
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ MOBILE COMMUNITY FORUM (320px - 767px)                                         │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ MOBILE HEADER                                                               │ │
│ │ ← 💬 Community                                           🔍 ➕             │ │
│ │ (H6: Inter 600, 18px, #1565C0)                    (Search, New post)       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ FILTER TABS (Horizontal scroll)                                            │ │
│ │                                                                             │ │
│ │ [🔥 Hot] [📝 Recent] [❓ Questions] [💡 Tips] [🏆 Success] →                │ │
│ │ ──────── (Active tab indicator)                                             │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ FORUM POSTS (Single column, full width)                                    │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 👤 Priya Sharma • 2h • Mumbai                                           │ │ │
│ │ │ (Compact author info)                                                   │ │ │
│ │ │                                                                         │ │ │
│ │ │ [❓] [GST] [MH]                                                          │ │ │
│ │ │ (Compact tags, max 3 visible)                                           │ │ │
│ │ │                                                                         │ │ │
│ │ │ GST Registration for Tech Startup                                       │ │ │
│ │ │ (H6: Inter 600, 16px, #212121)                                         │ │ │
│ │ │                                                                         │ │ │
│ │ │ I'm registering my SaaS startup in Pune. Do I need GST                 │ │ │
│ │ │ if my revenue is under ₹20 lakhs? Looking for guidance...              │ │ │
│ │ │ (Body2: Inter 400, 14px, truncated to 2 lines)                         │ │ │
│ │ │                                                                         │ │ │
│ │ │ 👍 12    💬 8    🔗 Share    ⭐ Save                                    │ │ │
│ │ │ (Compact interaction bar)                                               │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 👤 Amit Patel • 4h • Delhi                                              │ │ │
│ │ │                                                                         │ │ │
│ │ │ [💡] [Funding] [Tips]                                                   │ │ │
│ │ │                                                                         │ │ │
│ │ │ 5 Mistakes to Avoid When Pitching to Indian VCs                        │ │ │
│ │ │                                                                         │ │ │
│ │ │ Just closed our Series A! Here are the top mistakes I see              │ │ │
│ │ │ founders make when pitching to Indian investors...                      │ │ │
│ │ │                                                                         │ │ │
│ │ │ 👍 45    💬 23    🔗 Share    ⭐ Save                                   │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ FLOATING ACTION BUTTON                                                      │ │
│ │                                                                             │ │
│ │                                                              ➕             │ │
│ │                                                         (FAB: #1565C0,     │ │
│ │                                                          bottom-right,      │ │
│ │                                                          opens new post     │ │
│ │                                                          modal)             │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Community Features

### Gamification Elements
- Reputation points system
- Achievement badges (Helper, Expert, Mentor)
- Leaderboards for top contributors
- Streak tracking for daily participation

### Expert Verification
- Professional verification for CAs, lawyers, consultants
- Expert badges and highlighting
- Priority in answer sorting
- Direct consultation booking

### Regional Communities
- State-specific discussion groups
- City-based meetup coordination
- Regional language support
- Local business context

### Content Moderation
- Community-driven moderation
- Automated spam detection
- Expert review for technical answers
- Cultural sensitivity guidelines

## Accessibility and Engagement

### Mobile Optimization
- Touch-friendly interface design
- Swipe gestures for navigation
- Offline reading capabilities
- Push notifications for responses

### Search and Discovery
- Advanced search with filters
- Trending topics tracking
- Personalized recommendations
- Related post suggestions

### Integration Features
- Cross-platform sharing
- Email digest subscriptions
- Calendar integration for events
- Direct messaging between users