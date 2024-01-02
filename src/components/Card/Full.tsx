import { cn } from '@/utils/cn';

type FullProps = {
  isRounded?: boolean;
};

export function Full({ isRounded = false }: FullProps) {
  return (
    <div
      className={cn(
        'w-full shadow-md rounded-lg flex flex-col justify-center items-center md:flex-row',
        isRounded && 'md:py-14 md:pl-24 md:pr-14'
      )}
    >
      <img
        className={cn(
          'object-cover w-full max-w-[255px] h-64',
          isRounded && 'rounded-full'
        )}
        src="https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="p-4 relative flex justify-center items-center flex-col md:block">
        <h2 className="text-4xl font-bold mb-2">Spider man</h2>
        <div className="flex gap-3 mb-4">
          <span>10/12/2022</span>
          <span>47 pages</span>
          <span>U$0.90</span>
        </div>
        <p className="text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          nihil nobis, illo iste aspernatur assumenda veritatis. Architecto
          ullam id recusandae eius animi aut modi! Earum quia tempora beatae
          sint quod.
        </p>
      </div>
    </div>
  );
}
