insert into public.daily_insights (title, body, category)
values
  (
    'A quiet beginning',
    'You do not need to solve your whole life today. A clear beginning often looks like one honest question, one moment of stillness, and one step taken without rush.',
    'beginning'
  ),
  (
    'Let understanding settle',
    'When insight arrives, do not immediately turn it into performance. Let it soften your pace, your speech, and the way you meet the day.',
    'assimilation'
  )
on conflict do nothing;
