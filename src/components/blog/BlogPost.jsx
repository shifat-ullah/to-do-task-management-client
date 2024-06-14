// src/components/BlogPost.jsx

import './BlogPost.css';

const blogContent = {
  title: "Effective Task Management: A Guide to Getting Things Done",
  author: "John Doe",
  date: "June 15, 2024",
  image: "https://via.placeholder.com/600x300", // You can replace this with any image URL
  content: `
    Task management is a crucial skill for anyone looking to increase productivity and reduce stress. Whether you're a developer, corporate professional, banker, student, or freelancer, managing your tasks effectively can help you achieve your goals and meet deadlines.
    
    Here are some tips for effective task management:

    1. **Prioritize Your Tasks:** Start by identifying the most important tasks that need to be completed. Use the Eisenhower Matrix to categorize your tasks into urgent, non-urgent, important, and non-important.
    
    2. **Create a To-Do List:** Write down all the tasks you need to complete. This helps you visualize what needs to be done and keeps you focused.
    
    3. **Set Realistic Deadlines:** Give yourself enough time to complete each task. Avoid overloading your schedule with too many tasks at once.
    
    4. **Break Down Large Tasks:** Large tasks can be overwhelming. Break them down into smaller, manageable steps to make them less daunting.
    
    5. **Use Task Management Tools:** Utilize tools like Trello, Asana, or Monday.com to keep track of your tasks. These tools allow you to set deadlines, assign tasks to team members, and monitor progress.
    
    6. **Eliminate Distractions:** Find a quiet workspace and minimize distractions. Turn off notifications on your phone and computer while working on important tasks.
    
    7. **Review Your Progress:** At the end of each day or week, review what you've accomplished. This helps you stay on track and adjust your plans if needed.
    
    By following these tips, you can improve your task management skills and achieve greater productivity. Remember, the key is to stay organized and focused on your goals.
  `
};

const BlogPost = () => {
  const { title, author, date, image, content } = blogContent;

  return (
    <div className="blog-post">
      <h1>{title}</h1>
      <div className="flex">
        <span>By {author}</span>
        <span>{date}</span>
      </div>
      <img src={image} alt={title} />
      <div className="blog-content">
        {content}
      </div>
    </div>
  );
};

export default BlogPost;
