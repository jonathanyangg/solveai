import YouTubePlayer from '../media/YouTubePlayer';

export default function DemoVideo() {
  // Video ID extracted from the URL: https://www.youtube.com/watch?v=m0wAlnTPHRE
  const videoId = 'O4pfKNBziGI';
  
  return (
    <section className="py-16 bg-[#0a0a0a] px-4">
      <div className="max-w-7xl mx-auto">
        <p className='mb-4 text-center text-4xl font-medium text-[#ededed]'>
          Live Demo: AI Tour Guide Matcher
        </p>
        <p className='mx-auto mb-16 max-w-3xl text-center text-lg text-[#d6d4d4]'>
          Watch our latest prototype in action
        </p>

        <YouTubePlayer videoId={videoId} title="AI Tour Guide Matcher Demo" />
      </div>
    </section>
  );
} 