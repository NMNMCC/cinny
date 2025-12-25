import React from 'react';
import { TooltipProvider, Tooltip, Box, Text, Badge, toRem } from 'folds';
import { useTranslation } from '../internationalization';

export function BetaNoticeBadge() {
  const [t] = useTranslation();

  return (
    <TooltipProvider
      position="Right"
      align="Center"
      tooltip={
        <Tooltip style={{ maxWidth: toRem(200) }}>
          <Box direction="Column">
            <Text size="L400">{t.betaNotice.notice}</Text>
            <Text size="T200">{t.betaNotice.message}</Text>
          </Box>
        </Tooltip>
      }
    >
      {(triggerRef) => (
        <Badge size="500" tabIndex={0} ref={triggerRef} variant="Primary" fill="Solid">
          <Text size="L400">{t.betaNotice.beta}</Text>
        </Badge>
      )}
    </TooltipProvider>
  );
}
