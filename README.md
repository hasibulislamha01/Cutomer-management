### What is JSX
JSX এর পূর্ণরূপ JavaScript XML. এটা আমাদেরকে রিয়াক্ট কম্পোনেন্টের ভিতর Markup like javaScript লিখতে সাহায্য করে। 


### Difference between state and props
State হলো রিয়্যাক্ট কম্পোনেন্ট এর একটি ভ্যারিয়েবল যা আমাদেরকে state update হওয়ার সাথে সাথেই UI update করতে সাহায্য করে। 
Props হলো রিয়্যাক্ট এর parent component হতে child component এ পাঠানো variable যা child component ব্যবহার করতে পারে কিন্তু পরিবর্তন করতে পারেনা।

### What is useState hook and how does it work
useState একটি রিয়্যাক্ট হুক যা এমন ভ্যারিয়েবল store ও update করায় ব্যবহার করা হয় যার উপর react component নির্ভরশীল। এটি একটি variable এবং function এর array return করে। Varibale টা ভ্যালু স্টোর করে আর function টা ভ্যালু আপডেট করার কাজ করে।

### How can you share state between components in React?
আমরা prop lifting এর মাধ্যমে props share করতে পারি। আমরা common parent component এ state রাখার মাধ্যমে প্যারেন্ট component থেকে child component এ props পাঠিয়ে props share করতে পারি।

### How is event handling done in React?
Event handling আমরা রিয়্যাক্ট এ কিছু ফাংশন ব্যবহার করে করতে পারি যেমন onClick, onBlur, onMouseEnter etc
