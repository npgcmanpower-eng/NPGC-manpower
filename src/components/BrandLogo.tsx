import React from 'react';

// Official New Path Global Healthcare Logo (embedded directly as data URI)
const NPGC_OFFICIAL_LOGO = "data:image/png;base64,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";

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'white';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'compact',
  showSubtitle = true
}) => {
  const isWhite = variant === 'white';

  return (
   <div className={`flex items-center gap-3 group ${className}`}>
    <div className="relative shrink-0 rounded-xl bg-white p-1 border border-slate-200 shadow-xs transition-transform group-hover:scale-105">
      <img
        src="/logo.png"
        alt="New Path Global Career Manpower Pvt Ltd"
        className="h-11 sm:h-13 w-auto object-contain rounded-lg"
        onError={(e) => {
          e.currentTarget.src = NPGC_OFFICIAL_LOGO;
        }}
      />
    </div>

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-base sm:text-lg font-black tracking-tight ${isWhite ? 'text-white' : 'text-[#0a2540]'}`}>
            New Path <span className="text-emerald-600">Global</span>
          </span>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
            Medical
          </span>
        </div>
        {showSubtitle && (
          <>
            <span className={`text-[11px] font-bold tracking-tight mt-1 ${isWhite ? 'text-slate-300' : 'text-slate-600'}`}>
              Career Manpower Pvt. Ltd.
            </span>
            <span className="text-[9px] font-semibold text-emerald-600 uppercase tracking-wider">
              For Medical Department
            </span>
          </>
        )}
      </div>
    </div>
  );
};
