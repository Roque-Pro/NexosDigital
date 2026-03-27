import type { VercelRequest, VercelResponse } from '@vercel/functions';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Apenas POST permitido
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, taskId, youtubeUrl } = req.body;
    const runwayApiKey = process.env.RUNWAY_API_KEY;

    if (!runwayApiKey) {
      return res.status(500).json({ error: 'RUNWAY_API_KEY não configurada' });
    }

    // Criar nova task
    if (action === 'create') {
      const response = await fetch('https://api.runwayml.com/v1/tasks', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${runwayApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskType: 'video_edit',
          inputs: {
            source_video_url: youtubeUrl,
            aspect_ratio: '9:16',
            auto_caption: true,
            caption_language: 'pt',
            effects: [
              {
                type: 'focus_on_face',
                intensity: 'high'
              },
              {
                type: 'enhance_audio',
                intensity: 'high'
              }
            ]
          },
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('Runway API Error:', error);
        return res.status(response.status).json({ 
          error: 'Erro ao criar task na Runway ML',
          details: error 
        });
      }

      const taskData = await response.json();
      return res.status(200).json(taskData);
    }

    // Verificar status da task
    if (action === 'status' && taskId) {
      const response = await fetch(
        `https://api.runwayml.com/v1/tasks/${taskId}`,
        {
          headers: {
            'Authorization': `Bearer ${runwayApiKey}`,
          },
        }
      );

      if (!response.ok) {
        const error = await response.text();
        console.error('Runway API Error:', error);
        return res.status(response.status).json({ 
          error: 'Erro ao verificar status',
          details: error 
        });
      }

      const statusData = await response.json();
      return res.status(200).json(statusData);
    }

    return res.status(400).json({ error: 'Action inválida' });

  } catch (error: any) {
    console.error('Server Error:', error);
    return res.status(500).json({ 
      error: 'Erro no servidor',
      message: error.message 
    });
  }
}
