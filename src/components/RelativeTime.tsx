interface RelativeTimeProps {
  datetime: string;
  className?: string;
}

export function RelativeTime({ datetime, className }: RelativeTimeProps) {
  const formattedTitle = new Date(datetime).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short'
  });

  return (
    <time 
      dateTime={datetime}
      className={className}
      title={formattedTitle}
    >
      Updated {new Date(datetime).toLocaleDateString()}
    </time>
  );
} 