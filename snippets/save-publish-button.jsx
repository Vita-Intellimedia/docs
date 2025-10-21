import { Button } from '@your-app/ui'; // Import your button component

export const SavePublishButton = () => {
  return (
    <div className="flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 not-prose">
      <Button variant="default" size="default">
        Save & Publish
      </Button>
    </div>
  );
};